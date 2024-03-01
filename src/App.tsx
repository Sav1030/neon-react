import React, { useState, useRef } from "react";

declare global {
  export class ImageCapture {
    constructor(track: MediaStreamTrack);
    grabFrame(): Promise<ImageBitmap>;
    takePhoto(): Promise<Blob>;
  }
}

function App() {
  const [webcamPhotoURL, setWebcamPhotoURL] = useState<string>("");
  const [screenshotURL, setScreenshotURL] = useState<string>("");
  const divRef = useRef<HTMLDivElement>(null);
  const startExam = async () => {
    // Screen Capture
    const mediaStream: MediaStream = await navigator.mediaDevices.getDisplayMedia();
    const track: MediaStreamTrack = mediaStream.getVideoTracks()[0];
    const imageCapture: ImageCapture = new ImageCapture(track);
    const screenshot: ImageBitmap = await imageCapture.grabFrame();
    
    const screenshotCanvas: HTMLCanvasElement = document.createElement("canvas");
    screenshotCanvas.width = screenshot.width;
    screenshotCanvas.height = screenshot.height;
    screenshotCanvas.getContext("2d")!.drawImage(screenshot, 0, 0);

    setScreenshotURL(screenshotCanvas.toDataURL());

    // Webcam Photo
    const webcamStream: MediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
    const webcamTrack: MediaStreamTrack = webcamStream.getVideoTracks()[0];
    const webcamCapture: ImageCapture = new ImageCapture(webcamTrack);
    const webcamPhoto: Blob = await webcamCapture.takePhoto();

    const URLCreator = window.URL || window.webkitURL;
    setWebcamPhotoURL(URLCreator.createObjectURL(webcamPhoto));
  };

  return (
    <div ref={divRef}>
      <button onClick={startExam} className="btn btn-success">Start Examination</button>
      <h2>Screen Capture:</h2>
      {screenshotURL && <img src={screenshotURL} alt="Screen Capture" />}
      <h2>Camera Photo:</h2>
      {webcamPhotoURL && <img src={webcamPhotoURL} alt="Webcam Capture" />}
    </div>
  );
}

export default App;
