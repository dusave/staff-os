import React from 'react'
import * as ToggleGroup from '@radix-ui/react-toggle-group';


export const ViewToggle = () => {
  return (
    <ToggleGroup.Root
    className="ToggleGroup"
    type="single"
    defaultValue="center"
    aria-label="Text alignment"
  >
    <ToggleGroup.Item className="ToggleGroupItem" value="left" aria-label="Left aligned">
      
    </ToggleGroup.Item>
    <ToggleGroup.Item className="ToggleGroupItem" value="center" aria-label="Center aligned">
      
    </ToggleGroup.Item>
    <ToggleGroup.Item className="ToggleGroupItem" value="right" aria-label="Right aligned">
      
    </ToggleGroup.Item>
  </ToggleGroup.Root>
  )
}
