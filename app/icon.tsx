import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #635bff 0%, #4f3df6 100%)',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: 'white',
          }}
        >
          W
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
