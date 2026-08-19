import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
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
          borderRadius: '40px',
          border: '3px solid rgba(194, 163, 107, 0.4)',
          position: 'relative',
        }}
      >
        {/* Layered Wood Planks Graphic */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '8px' }}>
          <div
            style={{
              width: '14px',
              height: '60px',
              background: 'linear-gradient(180deg, #F5E6CC 0%, #C2A36B 100%)',
              borderRadius: '3px',
              opacity: 0.85,
            }}
          />
          <div
            style={{
              width: '18px',
              height: '76px',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #C2A36B 100%)',
              borderRadius: '4px',
            }}
          />
          <div
            style={{
              width: '14px',
              height: '50px',
              background: 'linear-gradient(180deg, #D9C398 0%, #947438 100%)',
              borderRadius: '3px',
              opacity: 0.75,
            }}
          />
        </div>

        {/* SKPH Monogram Text */}
        <div
          style={{
            fontSize: '18px',
            fontWeight: 900,
            color: '#F5E6CC',
            letterSpacing: '4px',
            fontFamily: 'sans-serif',
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
