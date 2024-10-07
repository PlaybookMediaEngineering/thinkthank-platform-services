import React from 'react'

interface BeehiivEmbedProps {
  src?: string
  height?: number
}

const BeehiivEmbed: React.FC<BeehiivEmbedProps> = ({
  src = 'https://embeds.beehiiv.com/4f692db9-f752-431a-a867-ef422864a11b?slim=true',
  height = 52,
}) => {
  return (
    <iframe
      src={src}
      data-test-id="beehiiv-embed"
      width="380"
      height={height}
      frameBorder="0"
      scrolling="no"
      style={{
        margin: 0,
      }}
    />
  )
}

export default BeehiivEmbed
