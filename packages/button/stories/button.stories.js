import Button from '../'

export default {
    title: 'Example/Button',
    component: Button,
    // tags: ['autodocs'],
    render: (args,{ argTypes }) => ({
        // 这边的传参
        props: Object.keys(argTypes),
        components: { Button },
        template: '<Button v-bind="$props"/>',
    }) 
}

export const Primary = {
    args: {
    //   primary: true,
      label: 'Button111',
    },
  };