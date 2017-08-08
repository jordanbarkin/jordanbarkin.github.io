// Generated by CoffeeScript 1.12.7
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  module.exports = (function(superClass) {
    extend(exports, superClass);

    function exports(options) {
      var autoInitial, backButtons, btn, i, len, transitions;
      if (options == null) {
        options = {};
      }
      if (options.width == null) {
        options.width = Screen.width;
      }
      if (options.height == null) {
        options.height = Screen.height;
      }
      if (options.clip == null) {
        options.clip = true;
      }
      if (options.initialViewName == null) {
        options.initialViewName = 'initialView';
      }
      if (options.backButtonName == null) {
        options.backButtonName = 'backButton';
      }
      if (options.animationOptions == null) {
        options.animationOptions = {
          curve: "cubic-bezier(0.19, 1, 0.22, 1)",
          time: .7
        };
      }
      if (options.backgroundColor == null) {
        options.backgroundColor = "black";
      }
      if (options.scroll == null) {
        options.scroll = false;
      }
      if (options.autoLink == null) {
        options.autoLink = true;
      }
      exports.__super__.constructor.call(this, options);
      this.history = [];
      this.onChange("subLayers", (function(_this) {
        return function(changeList) {
          var c, children, i, len, scrollComponent, view;
          view = changeList.added[0];
          if (view != null) {
            view.clip = true;
            view.on(Events.Click, function() {});
            if (_this.scroll) {
              children = view.children;
              scrollComponent = new ScrollComponent({
                name: "scrollComponent",
                width: _this.width,
                height: _this.height,
                parent: view
              });
              scrollComponent.content.backgroundColor = "";
              if (view.width <= _this.width) {
                scrollComponent.scrollHorizontal = false;
              }
              if (view.height <= _this.height) {
                scrollComponent.scrollVertical = false;
              }
              for (i = 0, len = children.length; i < len; i++) {
                c = children[i];
                c.parent = scrollComponent.content;
              }
              view.scrollComponent = scrollComponent;
              return view.size = {
                width: _this.width,
                height: _this.height
              };
            }
          }
        };
      })(this));
      transitions = {
        switchInstant: {
          newView: {
            to: {
              x: 0,
              y: 0
            }
          }
        },
        fadeIn: {
          newView: {
            from: {
              opacity: 0
            },
            to: {
              opacity: 1
            }
          }
        },
        zoomIn: {
          newView: {
            from: {
              scale: 0.8,
              opacity: 0
            },
            to: {
              scale: 1,
              opacity: 1
            }
          }
        },
        zoomOut: {
          oldView: {
            to: {
              scale: 0.8,
              opacity: 0
            }
          }
        },
        slideInUp: {
          newView: {
            from: {
              y: this.height
            },
            to: {
              y: 0
            }
          }
        },
        slideInRight: {
          newView: {
            from: {
              x: this.width
            },
            to: {
              x: 0
            }
          }
        },
        slideInDown: {
          newView: {
            from: {
              maxY: 0
            },
            to: {
              y: 0
            }
          }
        },
        moveInRight: {
          oldView: {
            to: {
              maxX: 0
            }
          },
          newView: {
            from: {
              x: this.width
            },
            to: {
              x: 0
            }
          }
        },
        moveInLeft: {
          oldView: {
            to: {
              x: this.width
            }
          },
          newView: {
            from: {
              maxX: 0
            },
            to: {
              x: 0
            }
          }
        },
        slideInLeft: {
          newView: {
            from: {
              maxX: 0
            },
            to: {
              maxX: this.width
            }
          }
        },
        pushInRight: {
          oldView: {
            to: {
              x: -(this.width / 5),
              brightness: 70
            }
          },
          newView: {
            from: {
              x: this.width
            },
            to: {
              x: 0
            }
          }
        },
        pushInLeft: {
          oldView: {
            to: {
              x: this.width / 5,
              brightness: 70
            }
          },
          newView: {
            from: {
              x: -this.width
            },
            to: {
              x: 0
            }
          }
        },
        pushOutRight: {
          oldView: {
            to: {
              x: this.width
            }
          },
          newView: {
            from: {
              x: -(this.width / 5),
              brightness: 70
            },
            to: {
              x: 0,
              brightness: 100
            }
          }
        },
        pushOutLeft: {
          oldView: {
            to: {
              maxX: 0
            }
          },
          newView: {
            from: {
              x: this.width / 5,
              brightness: 70
            },
            to: {
              x: 0,
              brightness: 100
            }
          }
        },
        slideOutUp: {
          oldView: {
            to: {
              maxY: 0
            }
          }
        },
        slideOutRight: {
          oldView: {
            to: {
              x: this.width
            }
          }
        },
        slideOutDown: {
          oldView: {
            to: {
              y: this.height
            }
          }
        },
        slideOutLeft: {
          oldView: {
            to: {
              maxX: 0
            }
          }
        }
      };
      transitions.slideIn = transitions.slideInRight;
      transitions.slideOut = transitions.slideOutRight;
      transitions.pushIn = transitions.pushInRight;
      transitions.pushOut = transitions.pushOutRight;
      Events.ViewWillSwitch = "viewWillSwitch";
      Events.ViewDidSwitch = "viewDidSwitch";
      Layer.prototype.onViewWillSwitch = function(cb) {
        return this.on(Events.ViewWillSwitch, cb);
      };
      Layer.prototype.onViewDidSwitch = function(cb) {
        return this.on(Events.ViewDidSwitch, cb);
      };
      _.each(transitions, (function(_this) {
        return function(animProps, name) {
          var btn, i, layers, len, viewController;
          if (options.autoLink) {
            layers = Framer.CurrentContext.getLayers();
            for (i = 0, len = layers.length; i < len; i++) {
              btn = layers[i];
              if (_.includes(btn.name, name)) {
                viewController = _this;
                btn.onClick(function() {
                  var anim, linkName;
                  anim = this.name.split('_')[0];
                  linkName = this.name.replace(anim + '_', '');
                  linkName = linkName.replace(/\d+/g, '');
                  return viewController[anim](_.find(layers, function(l) {
                    return l.name === linkName;
                  }));
                });
              }
            }
          }
          return _this[name] = function(newView, animationOptions) {
            var animObj, hook, incoming, outgoing, ref, ref1, ref2, ref3, ref4, ref5, ref6;
            if (animationOptions == null) {
              animationOptions = _this.animationOptions;
            }
            if (newView === _this.currentView) {
              return;
            }
            newView.parent = _this;
            newView.sendToBack();
            newView.point = {
              x: 0,
              y: 0
            };
            newView.opacity = 1;
            newView.scale = 1;
            newView.brightness = 100;
            if ((ref = _this.currentView) != null) {
              ref.point = {
                x: 0,
                y: 0
              };
            }
            if ((ref1 = _this.currentView) != null) {
              ref1.props = (ref2 = animProps.oldView) != null ? ref2.from : void 0;
            }
            animObj = _.extend({
              properties: (ref3 = animProps.oldView) != null ? ref3.to : void 0
            }, animationOptions);
            _.defaults(animObj, {
              properties: {}
            });
            outgoing = (ref4 = _this.currentView) != null ? ref4.animate(animObj) : void 0;
            newView.props = (ref5 = animProps.newView) != null ? ref5.from : void 0;
            incoming = newView.animate(_.extend({
              properties: (ref6 = animProps.newView) != null ? ref6.to : void 0
            }, animationOptions));
            if (_.includes(name, 'Out')) {
              newView.placeBehind(_this.currentView);
              outgoing.on(Events.AnimationEnd, function() {
                return _this.currentView.bringToFront();
              });
            } else {
              newView.placeBefore(_this.currentView);
            }
            _this.emit(Events.ViewWillSwitch, _this.currentView, newView);
            _this.saveCurrentViewToHistory(name, outgoing, incoming);
            _this.currentView = newView;
            _this.emit("change:previousView", _this.previousView);
            _this.emit("change:currentView", _this.currentView);
            if (incoming.isAnimating) {
              hook = incoming;
            } else {
              hook = outgoing;
            }
            return hook.on(Events.AnimationEnd, function() {
              return _this.emit(Events.ViewDidSwitch, _this.previousView, _this.currentView);
            });
          };
        };
      })(this));
      if (options.initialViewName != null) {
        autoInitial = _.find(Framer.CurrentContext.getLayers(), function(l) {
          return l.name === options.initialViewName;
        });
        if (autoInitial != null) {
          this.switchInstant(autoInitial);
        }
      }
      if (options.initialView != null) {
        this.switchInstant(options.initialView);
      }
      if (options.backButtonName != null) {
        backButtons = _.filter(Framer.CurrentContext.getLayers(), function(l) {
          return _.includes(l.name, options.backButtonName);
        });
        for (i = 0, len = backButtons.length; i < len; i++) {
          btn = backButtons[i];
          btn.onClick((function(_this) {
            return function() {
              return _this.back();
            };
          })(this));
        }
      }
    }

    exports.define("previousView", {
      get: function() {
        return this.history[0].view;
      }
    });

    exports.prototype.saveCurrentViewToHistory = function(name, outgoingAnimation, incomingAnimation) {
      return this.history.unshift({
        view: this.currentView,
        animationName: name,
        incomingAnimation: incomingAnimation,
        outgoingAnimation: outgoingAnimation
      });
    };

    exports.prototype.back = function() {
      var backIn, moveOut, previous;
      previous = this.history[0];
      if (previous.view != null) {
        if (_.includes(previous.animationName, 'Out')) {
          previous.view.bringToFront();
        }
        backIn = previous.outgoingAnimation.reverse();
        moveOut = previous.incomingAnimation.reverse();
        backIn.start();
        moveOut.start();
        this.currentView = previous.view;
        this.history.shift();
        return moveOut.on(Events.AnimationEnd, (function(_this) {
          return function() {
            return _this.currentView.bringToFront();
          };
        })(this));
      }
    };

    return exports;

  })(Layer);

}).call(this);
