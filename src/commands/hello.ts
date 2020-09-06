import { app } from '../initializers/bolt'

export const echo = () => {
  app.command('/echo', async({command, ack, say}) => {
    ack()
    say(`${command.text}`)
  })
};