import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getTTFB(onPerfEntry);
      getLCP(onPerfEntry);
      getFCP(onPerfEntry);
      getFID(onPerfEntry);
    });
  }
};

export default reportWebVitals;
