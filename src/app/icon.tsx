import { ImageResponse } from 'next/og';

export const size = {
  width: 512,
  height: 512,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #4A3426 0%, #281A12 100%)',
          borderRadius: '112px',
          border: '6px solid rgba(194, 163, 107, 0.4)',
          position: 'relative',
        }}
      >
        {/* Layered Wood Planks Graphic */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', marginBottom: '24px' }}>
          <div
            style={{
              width: '46px',
              height: '190px',
              background: 'linear-gradient(180deg, #F5E6CC 0%, #C2A36B 100%)',
              borderRadius: '10px',
              opacity: 0.85,
            }}
          />
          <div
            style={{
              width: '60px',
              height: '240px',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #C2A36B 100%)',
              borderRadius: '12px',
              boxShadow: '0 10px 24px rgba(0,0,0,0.5)',
            }}
          />
          <div
            style={{
              width: '46px',
              height: '160px',
              background: 'linear-gradient(180deg, #D9C398 0%, #947438 100%)',
              borderRadius: '10px',
              opacity: 0.75,
            }}
          />
        </div>

        {/* Base Plywood Sheet Accent */}
        <div
          style={{
            width: '240px',
            height: '16px',
            background: 'linear-gradient(90deg, #C2A36B 0%, #F5E6CC 50%, #C2A36B 100%)',
            borderRadius: '8px',
            marginBottom: '28px',
          }}
        />

        {/* SKPH Monogram Brand Text */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: 900,
            color: '#F5E6CC',
            letterSpacing: '14px',
            fontFamily: 'sans-serif',
            textShadow: '0 4px 12px rgba(0,0,0,0.6)',
          }}
        >
          SKPH
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
