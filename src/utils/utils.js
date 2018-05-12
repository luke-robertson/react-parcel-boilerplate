import Queue from 'js-queue'
import nodeStore from 'stores/nodeStore'
import { Tween, Easings } from 'konva'

const queue = new Queue()

const setUp = () => {
  queue.add(() => delay(1.3))
  queue.add(() =>
    animate('block', {
      animation: 'X',
      targetValue: '50',
      duration: 0.5
    })
  )
  queue.add(() =>
    animate('block', {
      animation: 'Y',
      targetValue: '50',
      duration: 0.5
    })
  )
  queue.add(() =>
    animate('block', {
      animation: 'fill',
      targetValue: 'red',
      duration: 0.5
    })
  )
  queue.add(() =>
    animate('block', {
      animation: 'height',
      targetValue: '100',
      duration: 0.5
    })
  )
  queue.add(() =>
    animate('block', {
      animation: 'width',
      targetValue: '100',
      duration: 0.5
    })
  )
  queue.add(() =>
    animate('block', {
      animation: 'x',
      targetValue: '150',
      duration: 0.5
    })
  )
  queue.add(() =>
    animate('block', {
      animation: 'y',
      targetValue: '150',
      duration: 0.5
    })
  )
  queue.add(() =>
    animate('block', {
      animation: 'fill',
      targetValue: 'yellow',
      duration: 0.5
    })
  )
  queue.add(() =>
    animate('block', {
      animation: 'height',
      targetValue: '250',
      duration: 0.5
    })
  )
  queue.add(() =>
    animate('block', {
      animation: 'width',
      targetValue: '250',
      duration: 0.5
    })
  )
  queue.add(() =>
    animate('block', {
      animation: 'x',
      targetValue: '350',
      duration: 0.5
    })
  )
  queue.add(() =>
    animate('block', {
      animation: 'y',
      targetValue: '350',
      duration: 0.5
    })
  )
}

const animate = (target, { animation, targetValue, duration, triggerNext }) => {
  const node = nodeStore[target]

  if (triggerNext) {
    queue.next()
  }

  var tween = new Tween({
    easing: Easings.EaseInOut,
    node,
    duration,
    [animation]: targetValue
  })

  tween.play()

  setTimeout(() => {
    tween.finish()
    if (!triggerNext) {
      queue.next()
    }
  }, duration * 1000)
}

const delay = delay => {
  setTimeout(() => {
    queue.next()
  }, delay * 1000)
}

export { delay, animate, setUp }
