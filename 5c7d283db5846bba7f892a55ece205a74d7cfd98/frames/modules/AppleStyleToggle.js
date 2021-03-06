// Generated by CoffeeScript 1.12.7
(function() {
  var Thumb, ToggleBackground, active, silver, thumbGrow, thumbSize, toggleRadius, toggleSize, white,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Framer.Defaults.Animation = {
    curve: "spring(300,30,0)"
  };

  white = "FFFFFF";

  silver = "EEEEEE";

  active = "1698d6";

  toggleSize = 100;

  toggleRadius = toggleSize / 2;

  thumbSize = toggleSize / 1.75;

  thumbGrow = thumbSize * 0.2;

  module.exports = (function(superClass) {
    extend(exports, superClass);

    function exports(options) {
      if (options == null) {
        options = {};
      }
      options.width = toggleSize;
      options.height = thumbSize;
      options.borderRadius = toggleRadius;
      options.shadowSpread = toggleSize / 50;
      options.shadowColor = silver;
      options.clip = false;
      exports.__super__.constructor.call(this, options);
      this.background = new ToggleBackground;
      this.thumb = new Thumb;
      this.states.add({
        off: {
          backgroundColor: silver,
          shadowColor: silver
        },
        on: {
          backgroundColor: active,
          shadowColor: active
        },
        offTouch: {
          backgroundColor: silver
        },
        onTouch: {
          backgroundColor: silver
        }
      });
      this.states.animationOptions = {
        colorModel: "rgb",
        curve: "linear",
        time: 0.2
      };
      this.states.switchInstant("off");
      this.addSubLayer(this.background);
      this.addSubLayer(this.thumb);
      this.on(Events.TouchStart, function() {
        if (this.thumb.states.current.name === "off") {
          this.thumb.states["switch"]("offTouch");
          this.states["switch"]("offTouch");
          this.background.states["switch"]("off");
        }
        if (this.thumb.states.current.name === "on") {
          return this.thumb.states["switch"]("onTouch");
        }
      });
      this.on(Events.TouchEnd, function() {
        if (this.thumb.states.current.name === "offTouch") {
          this.thumb.states["switch"]("on");
          this.states["switch"]("on");
        }
        if (this.thumb.states.current.name === "onTouch") {
          this.thumb.states["switch"]("off");
          this.states["switch"]("off");
          return this.background.states["switch"]("on");
        }
      });
    }

    return exports;

  })(Layer);

  ToggleBackground = (function(superClass) {
    extend(ToggleBackground, superClass);

    function ToggleBackground(options) {
      if (options == null) {
        options = {};
      }
      options.width = toggleSize;
      options.height = thumbSize;
      options.borderRadius = toggleRadius;
      options.backgroundColor = white;
      ToggleBackground.__super__.constructor.call(this, options);
      this.states.add({
        off: {
          scale: 0
        },
        on: {
          scale: 1
        }
      });
      this.states.animationOptions = {
        colorModel: "rgb",
        curve: "linear",
        time: 0.2
      };
    }

    return ToggleBackground;

  })(Layer);

  Thumb = (function(superClass) {
    extend(Thumb, superClass);

    function Thumb(options) {
      if (options == null) {
        options = {};
      }
      options.x = 0;
      options.y = 0;
      options.borderRadius = toggleRadius;
      options.backgroundColor = white;
      options.height = thumbSize;
      options.shadowY = toggleSize / 60;
      options.shadowBlur = toggleSize / 40;
      options.shadowSpread = toggleSize / 100;
      options.shadowColor = "rgba(0,0,0,0.2)";
      Thumb.__super__.constructor.call(this, options);
      this.states.add({
        off: {
          width: thumbSize,
          x: 0
        },
        on: {
          width: thumbSize,
          x: toggleSize - thumbSize
        },
        offTouch: {
          width: thumbSize + thumbGrow
        },
        onTouch: {
          width: thumbSize + thumbGrow,
          x: toggleSize - thumbSize - thumbGrow
        }
      });
      this.states.switchInstant("off");
    }

    return Thumb;

  })(Layer);

}).call(this);
