const loadingTitle = (page: string) => {
  setTimeout(() => {
    document.title = "=";
    setTimeout(() => {
      document.title = "==";
      setTimeout(() => {
        document.title = "===";
        setTimeout(() => {
          document.title = "====";
          setTimeout(() => {
            document.title = "=====";
            setTimeout(() => {
              document.title = "======";
              setTimeout(() => {
                document.title = "=======";
                setTimeout(() => {
                  document.title = "========";
                  setTimeout(() => {
                    document.title = "=========";
                    setTimeout(() => {
                      document.title = `Aldipratama || ${page}`;
                    }, 100);
                  }, 100);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  }, 100);
};

export default loadingTitle;
