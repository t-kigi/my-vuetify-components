(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{394:function(e,t,n){"use strict";n.r(t);var r=n(25),o=(n(88),n(19),n(53),n(176)),c=n(175),l={components:{OneClickButton:o.default,EventMessageBoard:c.default},data:function(){return{}},methods:{sleep:function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},oneClickButtonCallback:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.sleep(3e3);case 2:case"end":return t.stop()}}),t)})))()},clickEventMessageBoard:function(){this.$refs.eventMessageBoardExample.add(new Date)}}},d=n(56),v=n(73),m=n.n(v),f=n(108),k=n(383),w=n(368),_=n(392),B=n(393),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n        components/ui/OneClickButton.vue\n      ")]),e._v(" "),n("v-card-text",[n("p",[e._v("\n          Simple v-btn wrapper. Its state changes into disabled after click\n          OneClickButton until async callback function finished.\n        ")]),e._v(" "),n("one-click-button",{attrs:{color:"error","click-callback":e.oneClickButtonCallback}},[e._v("\n          disable 3 seconds (as minimum) after click it\n        ")])],1)],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n        components/ui/EventMessageBoard.vue\n      ")]),e._v(" "),n("v-card-text",[n("p",[e._v("\n          Message Box(es) hide itself automatically after several seconds. For\n          example, to show error message(s) is good usage.\n        ")]),e._v(" "),n("v-btn",{attrs:{color:"info"},on:{click:e.clickEventMessageBoard}},[e._v("\n          Add new message\n        ")]),e._v(" "),n("event-message-board",{ref:"eventMessageBoardExample",attrs:{color:"error",timeout:2e3}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:f.a,VCard:k.a,VCardText:w.a,VCardTitle:w.b,VCol:_.a,VRow:B.a})}}]);