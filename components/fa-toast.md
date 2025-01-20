# FaToast 轻提示

## 使用示例

```ts
import { toast } from 'vue-sonner'

toast('Event has been created')

toast('Event has been created', {
  description: 'Monday, January 3rd at 6:00pm'
})

toast.success('Event has been created')

toast.error('Event has not been created')

toast('Event has been created', {
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo')
  }
})
```