import React from 'react';

export default function WebMap({ latitude = 32.3394, longitude = -6.3655 }) {
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`;
  return (
    <iframe
      src={mapUrl}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
    />
  );
}
