var AppleToggle,Checkmark,ConnectCheck,FlipTriangle,FourWayPanelIcon,NextAndFinishButton,Parent,Point,Primer,ShareButton,Status,ThanksSwitch,TwoDotToggle,ViewController,animateTime,backgroundScreen,blackBoxPortrait,clearEvents,closeLowerUI,closeLowestUI,closeRecordedLowerUI,closeRecordedLowestUI,createEvent,currentEvent,currentEventSet,dayButtons,dayConstraints,dayEntries,dayEntry,dayLabel,daySelectorPane,defaultEventSet,deleteVideo,dismissDayPanel,entry,events,focusNearestPreviousEvent,focusNearestUpcomingEvent,formatLength,goodJob,hideDaySelector,i,k,l,labelText,landscapeParent,leaveLiveView,len,lightsButton,liveViewIcon,liveViewOpened,loadEventSet,lockScreen,lockscreenParent,lowerUILiveView,lowerUIRecorded,lowestButtons,mainBackground,mic,monthLabel,nextButton,nightVisionButton,notification,nowInLiveView,onPause,onVideo,openLiveView,openLowerUI,openLowestUI,openRecordedLowerUI,openRecordedLowestUI,phone,phoneAsset,plusButton,plusButtonClosedUIParent,plusButtonOpenUIParent,portraitCurrentVideoTime,portraitOnVideoUI,portraitParent,portraitPlayPauseButton,portraitRedDot,portraitVideoLength,potraitRecordedPlusButton,previousButton,primer,progress,recordedVideoButtons,recordedVideoLowestButtons,recordedVideoLowestButtonsParent,ringBlue,sampleGoLiveButton,scrubber,scrubberTouched,secondaryEventSet,sharePortraitRecordedButton,shortcuts,showDaySelector,showScrubber,sirenButton,sosButton,sound,starPortraitRecordedButton,switchToLandscapeButton,targetScale,timeline,timelineAdjustment,timelineConstraints,timelineFocus,timelineLabel,timelineParent,togglePortraitVideoPlaying,trashPortraitRecordedButton,uiParent,unlock,updateTime,updateVideo,updateWeekDay,video,videoBar,videoBlur,videoTimeline,videos,webContentParent,extend=function(e,t){function n(){this.constructor=e}for(var i in t)hasProp.call(t,i)&&(e[i]=t[i]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},hasProp={}.hasOwnProperty;for(ringBlue="#1997d5",targetScale=1,Framer.Device.orientationName="portrait",Framer.Extras.Hints.disable(),Parent=function(e){function t(e){t.__super__.constructor.call(this,_.defaults(e,{width:0,height:0,x:0,width:0}))}return extend(t,e),t}(Layer),Checkmark=function(e){function t(e){t.__super__.constructor.call(this,_.defaults(e,{width:32,height:32,image:"images/checkedImage.png",image:null,backgroundColor:null,currentIcon:"arrow"})),this.trigger=new Layer({parent:this,opacity:0}),this.onClick(function(){return this.check()})}return extend(t,e),t.prototype.check=function(){return"images/checkedImage.png"===this.image?this.image=null:this.image="images/checkedImage.png"},t.prototype.uncheck=function(){return"images/checkedImage.png"===this.image?this.image=null:void 0},t}(Layer),FlipTriangle=function(e){function t(e){t.__super__.constructor.call(this,_.defaults(e,{width:10,height:6,image:"images/flipIcon2.png",backgroundColor:null,currentIcon:"arrow"}))}return extend(t,e),t.prototype.flip=function(){return"images/flipIcon2.png"===this.image?this.image="images/flipIconFlipped.png":this.image="images/flipIcon2.png"},t}(Layer),ThanksSwitch=function(e){function t(e){t.__super__.constructor.call(this,_.defaults(e,{width:70,height:14,image:"images/thanks.png",image:null,backgroundColor:null,currentIcon:"arrow"})),this.trigger=new Layer({parent:this,opacity:0}),this.onClick(function(){return this.check()})}return extend(t,e),t.prototype.check=function(){return"images/thanks.png"===this.image?this.image=null:this.image="images/thanks.png"},t.prototype.uncheck=function(){return"images/thanks.png"===this.image?this.image=null:void 0},t}(Layer),ShareButton=function(e){function t(e){t.__super__.constructor.call(this,_.defaults(e,{width:90,height:40,opacity:0})),this.trigger=new Layer({parent:this,opacity:0}),this.onClick(function(){return this.open()})}return extend(t,e),t.prototype.open=function(){return sharingOverlay.visible=!0,sharingOverlay.animate({opacity:1,options:{time:.5,curve:Bezier.ease}})},t}(Layer),NextAndFinishButton=function(e){function t(e){t.__super__.constructor.call(this,_.defaults(e,{width:709,height:102,image:"images/fnn_0001_Vector-Smart-Object.png",currentState:"next"}))}return extend(t,e),t.prototype.switchToFinish=function(){return this.image="images/fnn_0000_Vector-Smart-Object.png"},t.prototype.switchToNext=function(){return this.image="images/fnn_0001_Vector-Smart-Object.png"},t}(Layer),FourWayPanelIcon=function(e){function t(e){t.__super__.constructor.call(this,_.defaults(e,{width:709,height:102,image:"images/fnn_0001_Vector-Smart-Object.png",currentState:"next"}))}return extend(t,e),t.prototype.switchToFinish=function(){return this.image="images/fnn_0000_Vector-Smart-Object.png"},t.prototype.switchToNext=function(){return this.image="images/fnn_0001_Vector-Smart-Object.png"},t}(Layer),ConnectCheck=function(e){function t(e){t.__super__.constructor.call(this,_.defaults(e,{width:235,height:71,image:"images/connectbutton.png",currentIcon:"arrow"}))}return extend(t,e),t.prototype.check=function(){return this.image="images/prelim__0005_Checkmark.png",this.width=33,this.height=29,this.y=this.y+20,this.x=this.x+100},t.prototype["switch"]=function(){return"images/prelim__0004_Arrow-icon.png"===this.image?this.check():(this.image="images/prelim__0004_Arrow-icon.png",this.width=235,this.height=71)},t}(Layer),TwoDotToggle=function(e){function t(e){t.__super__.constructor.call(this,_.defaults(e,{width:14,height:5,image:"images/swipe dots (left position).png"}))}return extend(t,e),t.prototype.check=function(){return this.image="images/swipe dots (right position).png"},t.prototype["switch"]=function(){return"images/swipe dots (left position).png"===this.image?this.check():this.image="images/swipe dots (left position).png"},t}(Layer),formatLength=function(e){var t,n;return t=""+Math.round(e%60/60),n=""+Math.round(e-60*t),1===t.length&&(t="0"+t),1===n.length&&(n="0"+n),t+":"+n},Point=function(e){function t(e){t.__super__.constructor.call(this,_.defaults(e,{width:0,width:25,height:35,image:"images/event copy.png",lat:0,"long":0}))}return extend(t,e),t}(Layer),Framer.Device.contentScale=.5,mainBackground=new Layer({backgroundColor:ringBlue,width:1600,height:1019,borderRadius:0,y:188}),phone=new Parent({width:mainBackground.width,height:mainBackground.height,backgroundColor:null,x:800,parent:mainBackground}),phoneAsset=new Layer({width:478,parent:phone,height:1016,image:"images/phoneAsset.png",x:98,y:-2}),mainBackground.centerX(),mainBackground.centerY(),portraitParent=new Parent({width:375,parent:phone,x:150,height:667}),portraitParent.centerY(),portraitParent.clip=!0,landscapeParent=new Parent({height:375,visible:!1,width:667,backgroundColor:null}),landscapeParent.clip=!0,lockscreenParent=new Parent({width:375,height:667}),backgroundScreen=new Layer({width:375,parent:portraitParent,height:667,image:"images/background screen.png"}),uiParent=new Parent({width:375,parent:portraitParent}),lowerUILiveView=new Parent({width:375,parent:uiParent}),lowerUIRecorded=new Parent({parent:uiParent,width:375}),plusButtonClosedUIParent=new Parent({parent:lowerUILiveView}),plusButtonOpenUIParent=new Parent({parent:lowerUILiveView}),recordedVideoButtons=new Layer({width:184,height:50,y:472,image:"images/recordedVideoButtons.png",parent:lowerUIRecorded}),recordedVideoButtons.centerX(),blackBoxPortrait=new Layer({parent:lowerUIRecorded,backgroundColor:"#000000",x:64,y:472,height:50,width:237}),plusButton=new Layer({width:50,parent:lowerUILiveView,height:50,image:"images/plusButton.png",y:472,x:163}),plusButton.states.add({closed:{rotationZ:0},open:{rotationZ:45}}),plusButton.stateSwitch("closed"),mic=new Layer({width:40,parent:plusButtonClosedUIParent,x:167,y:477,height:40,image:"images/micOff.png"}),sound=new Layer({width:40,parent:plusButtonClosedUIParent,height:40,y:477,x:167,image:"images/soundOff.png"}),mic.currentlyOn=!1,sound.currentlyOn=!1,mic.states.add({closed:{opacity:0,x:167},open:{x:95,opacity:1}}),mic.stateSwitch("open"),sound.states.add({closed:{opacity:0,x:167},open:{x:241,opacity:1}}),sound.stateSwitch("open"),mic.onClick(function(){return this.image=this.currentlyOn?"images/micOff.png":"images/micOn.png",this.currentlyOn=!this.currentlyOn}),sound.onClick(function(){return this.image=this.currentlyOn?"images/soundOff.png":"images/soundOn.png",this.currentlyOn=!this.currentlyOn}),plusButton.onClick(function(){return"closed"===plusButton.states.current.name?openLowerUI():closeLowerUI()}),openLowerUI=function(){return plusButton.animate("open"),mic.animate("closed"),sound.animate("closed"),openLowestUI()},closeLowerUI=function(){return plusButton.animate("closed"),mic.animate("open"),sound.animate("open"),closeLowestUI()},lightsButton=new Layer({width:40,y:477,x:167,parent:plusButtonOpenUIParent,opacity:0,height:40,image:"images/lighbulbUnchecked.png"}),lightsButton.states.add({off:{image:"images/lighbulbUnchecked.png"},on:{image:"images/lightEnabled.png"}}),nightVisionButton=new Layer({width:40,y:477,x:167,opacity:0,parent:plusButtonOpenUIParent,height:40,image:"images/nightVisionUnchecked.png"}),nightVisionButton.states.add({off:{image:"images/nightVisionUnchecked.png"},on:{image:"images/nightEnabled.png"}}),sirenButton=new Layer({y:477,x:167,opacity:0,parent:plusButtonOpenUIParent,height:40,width:40,image:"images/sirenUnchecked.png"}),sirenButton.states.add({off:{image:"images/sirenUnchecked.png"},on:{image:"images/sirenEnabled3.png"}}),sosButton=new Layer({width:40,y:477,x:167,parent:plusButtonOpenUIParent,opacity:0,height:40,image:"images/sosButtonUnchecked.png"}),sosButton.states.add({off:{image:"images/sosButtonUnchecked.png"},on:{image:"images/sosEnabled.png"}}),lowestButtons=[lightsButton,sirenButton,nightVisionButton,sosButton],k=0,len=lowestButtons.length;len>k;k++)entry=lowestButtons[k],entry.onClick(function(){return"on"===this.states.current.name?this.stateSwitch("off"):this.stateSwitch("on")});for(openLowestUI=function(){var e,t,n,i;for(i=[],e=t=0,n=lowestButtons.length;n>=0?n>t:t>n;e=n>=0?++t:--t)i.push(lowestButtons[e].animate({y:544,x:72+64*e,opacity:1,options:{time:.3,curve:Bezier.ease}}));return i},closeLowestUI=function(){var e,t,n,i;for(i=[],e=t=0,n=lowestButtons.length;n>=0?n>t:t>n;e=n>=0?++t:--t)i.push(lowestButtons[e].animate({y:477,x:167,opacity:0,options:{time:.3,curve:Bezier.ease}}));return i},openRecordedLowerUI=function(){return potraitRecordedPlusButton.animate("open"),nextButton.animate("closed"),previousButton.animate("closed"),openRecordedLowestUI()},closeRecordedLowerUI=function(){return potraitRecordedPlusButton.animate("closed"),nextButton.animate("open"),previousButton.animate("open"),closeRecordedLowestUI()},recordedVideoLowestButtonsParent=new Parent,sharePortraitRecordedButton=new Layer({width:40,height:40,y:477,x:167,opacity:0,parent:recordedVideoLowestButtonsParent,image:"images/shareUnchecked.png"}),starPortraitRecordedButton=new Layer({width:40,height:40,y:477,x:181,opacity:0,parent:recordedVideoLowestButtonsParent,image:"images/starUnchecked.png"}),trashPortraitRecordedButton=new Layer({width:40,y:477,x:167,opacity:0,parent:recordedVideoLowestButtonsParent,height:40,image:"images/trashUnchecked.png"}),recordedVideoLowestButtons=[starPortraitRecordedButton,sharePortraitRecordedButton,trashPortraitRecordedButton],openRecordedLowestUI=function(){var e,t,n,i;for(i=[],e=t=0,n=recordedVideoLowestButtons.length;n>=0?n>t:t>n;e=n>=0?++t:--t)i.push(recordedVideoLowestButtons[e].animate({y:544,x:103.5+64*e,opacity:1,options:{time:.3,curve:Bezier.ease}}));return i},closeRecordedLowestUI=function(){var e,t,n,i;for(i=[],e=t=0,n=recordedVideoLowestButtons.length;n>=0?n>t:t>n;e=n>=0?++t:--t)i.push(recordedVideoLowestButtons[e].animate({y:477,x:167,opacity:0,options:{time:.3,curve:Bezier.ease}}));return i},timelineParent=new Parent({width:375,parent:portraitParent}),timelineAdjustment=new Layer({parent:timelineParent,height:72,width:375,y:340,backgroundColor:"424242"}),timeline=new Layer({height:72,parent:timelineParent,width:500,y:340,backgroundColor:"424242",x:-173}),liveViewIcon=new Layer({width:48,height:72,y:340,x:327,parent:timelineParent,image:"images/goLive4.png"}),liveViewIcon.states.add({closed:{width:48,height:72,image:"images/goLive4.png"},open:{image:"images/Live2.png",width:128,height:72}}),timelineConstraints=new Layer({parent:timelineParent,y:timeline.y,height:timeline.height+20,x:-1*timeline.width+335-145,width:timeline.width+160+320,opacity:0}),timeline.draggable.enabled=!0,timeline.draggable.constraints=timelineConstraints,timeline.draggable.vertical=!1,timelineLabel=new Layer({width:516,height:11,y:87,parent:timeline,image:"images/timelineLabel.png",x:0}),portraitRedDot=new Layer({parent:liveViewIcon,height:12,width:12,visible:!1,borderRadius:12,backgroundColor:"D0021B",x:36,y:28}),portraitRedDot.bringToFront(),liveViewOpened=!1,liveViewIcon.onClick(function(){return liveViewOpened?void 0:openLiveView()}),timeline.onClick(function(){return liveViewOpened?leaveLiveView():void 0}),animateTime=.2,openLiveView=function(){return videoTimeline.visible=!1,portraitOnVideoUI.visible=!1,video.player.loop=!0,video.visible=!0,video.video="images/cam_1.mp4",video.player.play(),timeline.draggable.enabled=!1,timelineAdjustment.visible=!1,lowerUILiveView.visible=!0,lowerUILiveView.animate({opacity:1,options:{time:animateTime,curve:Bezier.ease}}),lowerUIRecorded.animate({opacity:0,options:{time:animateTime,curve:Bezier.ease}}),Utils.delay(animateTime,function(){return lowerUIRecorded.visible=!1}),liveViewOpened=!0,liveViewIcon.stateSwitch("open"),portraitRedDot.visible=!0,liveViewIcon.animate({x:189,options:{time:animateTime,curve:Bezier.ease}}),timeline.animate({x:-1*timeline.width+(375-liveViewIcon.width)-50,options:{time:animateTime,curve:Bezier.ease}})},timeline.onSwipeRight(function(){return liveViewOpened?leaveLiveView():void 0}),leaveLiveView=function(){return videoTimeline.visible=!0,video.player.loop=!1,timeline.draggable.enabled=!0,timelineAdjustment.visible=!0,lowerUIRecorded.visible=!0,portraitPlayPauseButton.stateSwitch("playing"),portraitOnVideoUI.visible=!0,lowerUILiveView.animate({opacity:0,options:{time:animateTime,curve:Bezier.ease}}),lowerUIRecorded.animate({opacity:1,options:{time:animateTime,curve:Bezier.ease}}),Utils.delay(animateTime,function(){return liveViewOpened=!1}),liveViewOpened=!1,Utils.delay(animateTime-.07,function(){return liveViewIcon.stateSwitch("closed"),portraitRedDot.visible=!1}),liveViewIcon.animate({x:327,options:{time:animateTime,curve:Bezier.ease}}),timeline.animate({x:-303,options:{time:animateTime,curve:Bezier.ease}})},events=[],createEvent=function(e,t){var n;return n=new Layer({parent:timeline,width:32,height:72,x:e}),"ring"===t?n.image="images/ringEvent.png":"double"===t?n.image="images/doubleEvent.png":n.image="images/motionEvent.png",events.push(n),n.name=t+"EventMarker"+(events.indexOf(n)+1),n.onClick(function(){return timelineFocus(this)})},clearEvents=function(){var e,t,n;for(t=0,n=events.length;n>t;t++)e=events[t],e.destroy();return events=[]},currentEventSet=[],defaultEventSet=[[30,"ring"],[130,"motion"],[275,"double"],[340,"ring"],[400,"motion"]],secondaryEventSet=[[40,"motion"],[150,"double"],[225,"ring"],[320,"ring"],[405,"motion"]],loadEventSet=function(e){var t,n,i,o;for(clearEvents(),currentEventSet=e,i=[],t=0,n=e.length;n>t;t++)o=e[t],i.push(createEvent(o[0],o[1]));return i},loadEventSet(defaultEventSet),currentEvent=events[events.length-1],timelineFocus=function(e){return showScrubber(),video.visible=!0,video.opacity=1,liveViewOpened&&leaveLiveView(),timeline.animate({x:-1*(e.x-187.5)-e.width/2}),currentEvent=e,updateVideo(),Utils.interval(.4,function(){return updateTime()})},focusNearestPreviousEvent=function(){var e,t,n,i;for(e=-1*timeline.x+171.5,n=t=0,i=events.length;i>=0?i>t:t>i;n=i>=0?++t:--t)if(events[n].x>=e&&n>0)return void timelineFocus(events[n-1]);return timelineFocus(events[0])},focusNearestUpcomingEvent=function(){var e,t,n,i;for(e=-1*timeline.x+171.5,n=t=i=events.length-1;t>=0;n=t+=-1){if(events[n].x<=e&&n<events.length-1)return void timelineFocus(events[n+1]);events[n].x<=e&&Utils.delay(.1,function(){return openLiveView()})}},previousButton=new Layer({parent:lowerUIRecorded,y:477,x:94,width:40,height:40,image:"images/portraitLeftButton.png"}),previousButton.onClick(function(){return focusNearestPreviousEvent()}),nextButton=new Layer({parent:lowerUIRecorded,y:477,x:241,width:40,height:40,image:"images/portraitRightLiveButton.png"}),nextButton.states.add({open:{opacity:1,x:241},closed:{opacity:0,x:167}}),previousButton.states.add({open:{opacity:1,x:94},closed:{opacity:0,x:167}}),nextButton.onClick(function(){return focusNearestUpcomingEvent()}),potraitRecordedPlusButton=new Layer({width:50,parent:lowerUIRecorded,height:50,image:"images/plusButton.png",y:472,x:163}),potraitRecordedPlusButton.states.add({closed:{rotationZ:0},open:{rotationZ:45}}),potraitRecordedPlusButton.stateSwitch("closed"),potraitRecordedPlusButton.onClick(function(){return"closed"===potraitRecordedPlusButton.states.current.name?openRecordedLowerUI():closeRecordedLowerUI()}),videoBlur=new Layer({parent:backgroundScreen,width:375,height:237,y:61,backgroundColor:null,image:"images/videoBlur.png"}),video=new VideoLayer({parent:backgroundScreen,y:65,width:375,height:211,video:"images/cam_2.mp4"}),videos=["images/cam_1.mp4","images/cam_2.mp4","images/doorbell_1.mp4","images/doorbell_2.mp4","images/doorbell_3.mp4"],updateVideo=function(){return portraitPlayPauseButton.stateSwitch("playing"),video.video=videos[events.indexOf(currentEvent)],video.player.play()},timeline.on(Events.DragAnimationEnd,function(e,t){return onVideo()?(video.visible=!0,updateVideo()):video.visible=!1}),timeline.on(Events.DragStart,function(e,t){return video.visible=!1}),onPause=!1,onVideo=function(){var e,t,n,i,o,r;for(o=-1*timeline.x+171.5,t=0,n=events.length;n>t;t++)if(e=events[t],i=e.x-12,r=e.x+12,o>i&&r>o)return timelineFocus(e),!0;return!1},video.player.play(),portraitOnVideoUI=new Parent({width:375,parent:portraitParent}),switchToLandscapeButton=new Layer({width:20,parent:portraitParent,height:20,image:"images/fullScreenButton.png",y:241,visible:!1,x:341}),portraitPlayPauseButton=new Layer({width:56,height:56,image:"images/pauseButton2.png",parent:portraitOnVideoUI,x:142,opacity:.86,y:142}),portraitPlayPauseButton.centerX(),portraitPlayPauseButton.states.add({paused:{image:"images/playButton2.png"},playing:{image:"images/pauseButton2.png"}}),portraitPlayPauseButton.stateSwitch("playing"),portraitPlayPauseButton.onClick(function(){return togglePortraitVideoPlaying()}),togglePortraitVideoPlaying=function(){return video.player.paused?(video.player.play(),portraitPlayPauseButton.stateSwitch("playing")):(video.player.pause(),portraitPlayPauseButton.stateSwitch("paused"))},videoTimeline=new Layer({width:187,height:2,borderRadius:10,backgroundColor:"#fff",clip:!1,parent:portraitOnVideoUI,y:251,x:72}),scrubberTouched=!1,progress=new Layer({width:0,height:videoTimeline.height,borderRadius:"10px",backgroundColor:"#1998D5",superLayer:videoTimeline}),scrubber=new Layer({width:12,height:12,y:-5,borderRadius:40,backgroundColor:"1998D5",shadowBlur:10,shadowColor:"rgba(0,0,0,0.75)",superLayer:videoTimeline,x:16}),scrubber.draggable.enabled=!0,scrubber.draggable.speedY=0,scrubber.draggable.constraints={x:0,y:videoTimeline.midY,width:videoTimeline.width,height:-10},scrubber.draggable.overdrag=!1,video.player.addEventListener("timeupdate",function(){var e;return e=videoTimeline.width/video.player.duration*video.player.currentTime,portraitVideoLength.text=formatLength(video.player.duration),portraitCurrentVideoTime.text=formatLength(video.player.currentTime),scrubber.x=e,progress.width=e+10}),video.player.addEventListener("ended",function(){return focusNearestUpcomingEvent()}),scrubber.on(Events.DragStart,function(){return video.player.pause()}),scrubber.on(Events.DragMove,function(){return progress.width=scrubber.x+10,scrubberTouched=!0,Utils.delay(4.5,function(){return scrubberTouched=!1})}),Utils.interval(5,function(){return scrubberTouched?void 0:portraitOnVideoUI.animate({opacity:0,options:{time:.3,curve:Bezier.ease}})}),showScrubber=function(){return scrubberTouched=!0,Utils.delay(1,function(){return scrubberTouched=!1}),portraitOnVideoUI.animate({opacity:1,options:{time:.3,curve:Bezier.ease}})},video.onClick(function(){return 0===portraitOnVideoUI.opacity?showScrubber():(scrubberTouched=!1,portraitOnVideoUI.animate({opacity:0,options:{time:.3,curve:Bezier.ease}}))}),scrubber.on(Events.DragEnd,function(){var e;return e=Utils.round(video.player.duration*(scrubber.x/videoTimeline.width),0),video.player.currentTime=e,video.player.play()}),portraitCurrentVideoTime=new TextLayer({fontFamily:"Equip-Medium",fontSize:16,color:"#FFFFFF",x:12,y:243,parent:portraitOnVideoUI,text:"00:00"}),portraitVideoLength=new TextLayer({fontFamily:"Equip-Medium",fontSize:16,y:243,x:279,color:"#FFFFFF",parent:portraitOnVideoUI,text:"00:00"}),deleteVideo=function(){return events.length>1?focusNearestPreviousEvent():openLiveView(),events.pop(events.indexOf(currentEvent)-1).destroy()},dayLabel=new TextLayer({width:100,height:18.86,text:"Thursday",fontSize:12,backgroundColor:"656565",fontFamily:"Equip-regular",parent:portraitParent,borderRadius:100,color:"FFFFFF",lineHeight:1.5,textAlign:"center",y:288}),dayLabel.states.add({on:{backgroundColor:"#1998D5"},off:{backgroundColor:"#656565"}}),dayLabel.centerX(),dayLabel.stateSwitch("off"),daySelectorPane=new Layer({backgroundColor:"FFFFFF",width:375,height:75,parent:portraitParent,y:591,visible:!1}),daySelectorPane.states.add({open:{y:591},closed:{y:750}}),daySelectorPane.stateSwitch("closed"),monthLabel=new TextLayer({parent:daySelectorPane,fontFamily:"Equip-medium",fontSize:12,color:"#757575",x:10,y:8,text:"JULY"}),dismissDayPanel=new Layer({parent:daySelectorPane,y:-591,width:375,opacity:0,height:587}),dayLabel.onClick(function(){return showDaySelector()}),dismissDayPanel.onClick(function(){return hideDaySelector()}),showDaySelector=function(){return video.player.pause(),dayLabel.stateSwitch("on"),daySelectorPane.visible=!0,daySelectorPane.animate("open")},hideDaySelector=function(){return video.player.play(),liveViewOpened||dayLabel.stateSwitch("off"),daySelectorPane.animate("closed"),Utils.delay(.3,function(){return daySelectorPane.visible=!1})},dayButtons=[],dayEntries=new Parent({parent:daySelectorPane,width:375,height:daySelectorPane.height,x:-1170,width:1860,backgroundColor:null}),dayConstraints=new Layer({parent:daySelectorPane,opacity:0,x:dayEntries.x,height:dayEntries.height,width:3040}),updateWeekDay=function(e){var t;return t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],dayLabel.text=t[e%7]},dayEntries.draggable.enabled=!0,dayEntries.draggable.vertical=!1,dayEntries.draggable.constraints=dayConstraints,i=l=0;30>=l;i=++l)dayEntry=new TextLayer({parent:dayEntries,height:34.14,width:34.14,y:29.55,borderRadius:100,borderWidth:1,borderColor:"#979797",fontFamily:"Equip-medium",fontSize:14,textAlign:"center",lineHeight:2.4,name:"dayEntry"+(i+1),color:"#757575",backgroundColor:"ffffff",x:50*i,text:i+1}),dayEntry.active=!1,dayEntry.states.add({selected:{borderWidth:0,color:"#ffffff",backgroundColor:"#1998D5"},deselected:{borderWidth:1,color:"#757575",backgroundColor:"#ffffff"}}),dayEntry.stateSwitch("deselected"),30===i&&dayEntry.stateSwitch("selected"),dayButtons.push(dayEntry),dayEntry.onClick(function(){var e,t,n,i;for(goodJob.visible=!0,n=0,t=dayButtons.length;t>n;n++)e=dayButtons[n],e.stateSwitch("deselected");return this.stateSwitch("selected"),hideDaySelector(),i=currentEventSet===defaultEventSet?secondaryEventSet:defaultEventSet,loadEventSet(i),timelineFocus(events[events.length-1]),updateWeekDay(this.text)});labelText=new TextLayer({parent:dayLabel,fontFamily:"Equip-medium",text:"10:00 AM",textAlign:"center",fontSize:16,color:"white",x:11,width:79,y:22.86}),timeline.on(Events.Move,function(e,t){return updateTime()}),updateTime=function(){var e,t,n;return t=Utils.modulate(timeline.x,[170,-310],[4,10]),e=new Date(0,0),e.setSeconds(60*+t*60),n=e.toTimeString().slice(0,5)+"AM",n="0"===n.charAt(0)?n.substring(1):n,labelText.centerX(),labelText.text=n},videoBar=new Layer({width:2,height:88,image:"images/videoBar.png",parent:timelineParent,x:187,y:332}),lockScreen=new Layer({width:375,parent:lockscreenParent,height:667}),notification=new Layer({y:202.5,opacity:1,visible:!1,parent:lockScreen,width:354,height:91.5,opacity:0,image:"images/liveNotification.png"}),notification.centerX(),Utils.delay(4,function(){return notification.visible=!0,notification.animate({opacity:1,options:{time:.5,curve:Bezier.ease}})}),notification.onClick(function(){return unlock()}),unlock=function(){return lockscreenParent.animate({opacity:0,options:{time:.5,curve:Bezier.ease}}),Utils.delay(.5,function(){return lockscreenParent.visible=!1})},onVideo(),unlock(),webContentParent=new Parent({parent:mainBackground}),webContentParent.centerY(),sampleGoLiveButton=new TextLayer({parent:webContentParent,backgroundColor:"D0021B",y:-317,color:"#FFFFFF",text:"Pick a Date",borderRadius:12,textAlign:"center",fontFamily:"Equip-medium",fontSize:40,lineHeight:2,x:154,width:350,height:82}),sampleGoLiveButton.onClick(function(){return showDaySelector(),nowInLiveView.animate({opacity:1,options:{time:.5,curve:Bezier.ease}})}),nowInLiveView=new TextLayer({parent:webContentParent,backgroundColor:null,y:-121,color:"#FFFFFF",text:"Now select a date on the device.",borderRadius:12,textAlign:"left",opacity:0,fontFamily:"Equip-light",fontSize:30,x:154,width:350,height:82}),goodJob=new TextLayer({parent:webContentParent,backgroundColor:null,y:7,color:"#FFFFFF",text:"Great work!",borderRadius:12,textAlign:"left",visible:!1,fontFamily:"Equip-light",fontSize:30,x:154,width:350,height:82});
