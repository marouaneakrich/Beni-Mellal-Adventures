import React from 'react';
import { WebView } from 'react-native-webview';

export default function NativeMap({ latitude = 32.3394, longitude = -6.3655 }) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <style> html, body, #map { height: 100%; margin: 0; padding: 0; } </style>
      </head>
      <body>
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          style="border:0"
          src="https://www.google.com/maps?q=${latitude},${longitude}&z=14&output=embed"
          allowfullscreen>
        </iframe>
      </body>
    </html>
  `;
  return <WebView source={{ html }} style={{ flex: 1 }} />;
}
