import EventEmitter from "events";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { EventEmitterProvider } from "./EventEmitterContext";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (props: Record<string, any> & { evEmitter: EventEmitter }) => {
    return (
      <EventEmitterProvider evEmitter={props.evEmitter}>
        <Root />
      </EventEmitterProvider>
    );
  },
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
