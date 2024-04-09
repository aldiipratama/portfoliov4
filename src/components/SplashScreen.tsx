import '@/components/SplashScreen.css'

const SplashScreen = ({ loading }: { loading: boolean }) => {
  return (
    loading && (
      <div className="absolute z-[9999] flex items-center justify-center w-full min-h-screen overflow-hidden text-black bg-white dark:bg-background">
        <div className="terminal-loader">
          <div className="terminal-header">
            <div className="terminal-title">Status</div>
            <div className="terminal-controls">
              <div className="control close"></div>
              <div className="control minimize"></div>
              <div className="control maximize"></div>
            </div>
          </div>
          <div className="text">Loading...</div>
        </div>
      </div>
    )
  );
};

export default SplashScreen;