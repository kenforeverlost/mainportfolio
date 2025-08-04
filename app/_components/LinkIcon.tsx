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
            size="small"
            {...iconButtonSlots}
            sx={{
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
