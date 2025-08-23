import { Box, BoxProps, IconButton, IconButtonProps } from '@mui/material'

import { OTHER_LINKS } from '@lib/constants'

interface LinkIconProps extends BoxProps {
  iconButtonSlots?: IconButtonProps
}

const LinkIcon = (props: LinkIconProps) => {
  const { iconButtonSlots, ...boxProps } = props
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }} {...boxProps}>
      {OTHER_LINKS.map((item) => {
        return (
          <IconButton
            key={item.name}
            component="a"
            href={item.url}
            target="_blank"
            {...iconButtonSlots}
            sx={{
              color: 'primary.contrastText',
              transition: 'opacity 0.3s ease-in-out',
              '&:hover': {
                color: 'tertiary.main',
              },
              width: '40px',
              height: '40px',
              ...iconButtonSlots?.sx,
            }}
          >
            {item.icon}
          </IconButton>
        )
      })}
    </Box>
  )
}
export default LinkIcon
