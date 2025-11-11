import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    // 刷新页面以重新加载应用
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-4">
          <div className="max-w-md w-full bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-6">
            <div className="flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-error text-6xl mb-4">
                error_outline
              </span>
              <h1 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2 font-chinese">
                出错了！
              </h1>
              <p className="text-sm text-subtext-light dark:text-subtext-dark mb-4 font-chinese">
                应用遇到了一个意外错误。我们已经记录了这个问题。
              </p>

              {/* 错误详情 */}
              {this.state.error && (
                <details className="w-full mb-4 text-left">
                  <summary className="cursor-pointer text-sm font-medium text-text-light dark:text-text-dark mb-2 font-chinese">
                    错误详情
                  </summary>
                  <div className="p-3 bg-background-light dark:bg-background-dark rounded border border-border-light dark:border-border-dark">
                    <p className="text-xs text-error mb-2 break-all font-mono">
                      {this.state.error.toString()}
                    </p>
                    {this.state.errorInfo && (
                      <pre className="text-xs text-subtext-light dark:text-subtext-dark overflow-auto max-h-40">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )}
                  </div>
                </details>
              )}

              <button
                onClick={this.handleReset}
                className="w-full h-12 rounded-lg bg-primary text-white font-bold transition-transform active:scale-[0.98] font-chinese"
              >
                刷新页面
              </button>

              <button
                onClick={() => window.location.href = '/'}
                className="mt-3 text-sm text-primary hover:underline font-chinese"
              >
                返回首页
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
