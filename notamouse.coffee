# http://developer.apple.com/library/IOs/#documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html
# http://www.netcu.de/jquery-touchwipe-iphone-ipad-library

NotAMouse =
  # wipeLeft: ->
  # wipeRight: ->
  # wipeUp: ->
  # wipeDown: ->

  config:
    min_move_x: 50
    min_move_y: 50
    preventDefaultEvents: true

  state:
    isMoving: false
    startX: null
    startY: null

  onTouchStart: (e) ->
    that = NotAMouse

    if e.touches.length == 1
      that.state.isMoving = true
      that.state.startX = e.touches[0].pageX
      that.state.startY = e.touches[0].pageY
      document.addEventListener 'touchmove', that.onTouchMove, false

  onTouchMove: (e) ->
    that = NotAMouse
    e.preventDefault() if that.config.preventDefaultEvents
    if that.state.isMoving
      dx = that.state.startX - e.touches[0].pageX
      dy = that.state.startY - e.touches[0].pageY

      if Math.abs(dx) >= that.config.min_move_x
        that.cancelTouch()
        if dx > 0 then that.wipeRight() else that.wipeLeft()

      else if Math.abs(dy) >= that.config.min_move_y
        that.cancelTouch()
        if dy > 0 then that.wipeDown() else that.wipeUp()

  cancelTouch: ->
    that = NotAMouse
    document.removeEventListener 'touchmove', that.onTouchMove
    that.state.isMoving = false
    that.state.startX = that.state.startY = null

  initialize: ->
    if 'ontouchstart' of document.documentElement
      document.addEventListener 'touchstart', NotAMouse.onTouchStart, false
