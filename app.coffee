App =
  kittenWidth: 200
  move: 50

  moveBox: (direction) ->
    document.getElementById('kitpic').src = @newKittenUrl()

    box = document.getElementById('kitten_box')

    if direction == 'up'
      @kittenWidth += 1
      box.style.top = (box.offsetTop + @move) + 'px'
      @updateWhatHappened('&darr;')

    else if direction == 'down'
      @kittenWidth -= 1
      box.style.top = (box.offsetTop - @move) + 'px'
      @updateWhatHappened('&uarr;')

    else if direction == 'right'
      @kittenWidth += 1
      box.style.left = (box.offsetLeft - @move) + 'px'
      @updateWhatHappened('&larr;')

    else if direction == 'left'
      @kittenWidth -= 1
      box.style.left = (box.offsetLeft + @move) + 'px'
      @updateWhatHappened('&rarr;')

  newKittenUrl: ->
    'http://placekitten.com/200/' + @kittenWidth

  updateWhatHappened: (content) ->
    document.getElementById('what_happened').innerHTML = content
