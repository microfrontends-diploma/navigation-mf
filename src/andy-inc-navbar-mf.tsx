import EventEmitter from "events";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { AppPropsProvider } from "./context";
import Navbar from ".";
import { AppProps } from "single-spa";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (props: AppProps & { eventEmitter: EventEmitter }) => {
    return (
      <AppPropsProvider props={props}>
        <Navbar />
      </AppPropsProvider>
    );
  },
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
