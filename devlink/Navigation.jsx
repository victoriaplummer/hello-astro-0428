"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Navigation.module.css";

export function Navigation({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "nav", "secondary-nav")}
      tag="div"
    >
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "nav-container")}
        tag="div"
        data-animation="default"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        role="banner"
        data-no-scroll="1"
        data-duration="400"
        config={{
          easing: "ease",
          easing2: "ease",
          duration: 400,
          docHeight: false,
          noScroll: true,
          animation: "default",
          collapse: "medium",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-left")}
          id={_utils.cx(
            _styles,
            "w-node-_4e9368b5-0144-17c5-ca7d-e67935816299-35816297"
          )}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-logo")}
            id={_utils.cx(
              _styles,
              "w-node-_4e9368b5-0144-17c5-ca7d-e6793581629a-35816297"
            )}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-logo-icon")}
              tag="div"
            >
              <_Builtin.NotSupported _atom="DOM" />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "paragraph-lg",
                "utility-margin-bottom-0"
              )}
              tag="div"
            >
              {"Your closet, your rules"}
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-center")}
          id={_utils.cx(
            _styles,
            "w-node-_4e9368b5-0144-17c5-ca7d-e679358162a0-35816297"
          )}
          tag="div"
        >
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "nav-menu")}
            id={_utils.cx(
              _styles,
              "w-node-_4e9368b5-0144-17c5-ca7d-e679358162a1-35816297"
            )}
            tag="nav"
            role="navigation"
          >
            <_Builtin.List
              className={_utils.cx(_styles, "nav-menu-list")}
              tag="ul"
              role="list"
              unstyled={true}
            >
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav-menu-list-item")}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav-menu-dropdown")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(_styles, "nav-link")}
                    tag="div"
                  >
                    <_Builtin.Block tag="div">{"Explore"}</_Builtin.Block>
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "nav-caret")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(
                      _styles,
                      "nav-mega-menu-dropdown-list"
                    )}
                    tag="nav"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "mega-nav-dropdown-list-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.List
                        className={_utils.cx(
                          _styles,
                          "grid-layout",
                          "desktop-3-column",
                          "tablet-1-column",
                          "grid-gap-sm",
                          "utility-margin-bottom-0"
                        )}
                        tag="ul"
                        role="list"
                        unstyled={true}
                      >
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "w-node-_4e9368b5-0144-17c5-ca7d-e679358162ac-35816297"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f0f-d66a6ef8"
                          )}
                        >
                          <_Builtin.Grid
                            className={_utils.cx(
                              _styles,
                              "grid-layout",
                              "desktop-3-column",
                              "tablet-1-column",
                              "grid-gap-sm"
                            )}
                          >
                            <_Builtin.Block tag="div">
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"Closet Magic"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(
                                  _styles,
                                  "nav-mega-menu-list"
                                )}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_4e9368b5-0144-17c5-ca7d-e679358162b2-35816297"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.NotSupported _atom="DOM" />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_4e9368b5-0144-17c5-ca7d-e679358162b7-35816297"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f1a-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Organize"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Sort your wardrobe effortlessly."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_4e9368b5-0144-17c5-ca7d-e679358162bd-35816297"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.NotSupported _atom="DOM" />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_4e9368b5-0144-17c5-ca7d-e679358162c2-35816297"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f25-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Rent Out"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Share your style with friends."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_4e9368b5-0144-17c5-ca7d-e679358162c8-35816297"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.NotSupported _atom="DOM" />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_4e9368b5-0144-17c5-ca7d-e679358162cd-35816297"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f30-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Dry Clean"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"We handle the cleaning for you."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                            <_Builtin.Block
                              id={_utils.cx(
                                _styles,
                                "w-node-_4e9368b5-0144-17c5-ca7d-e679358162d3-35816297"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"Fashion Hub"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(
                                  _styles,
                                  "nav-mega-menu-list"
                                )}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_4e9368b5-0144-17c5-ca7d-e679358162d7-35816297"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.NotSupported _atom="DOM" />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_4e9368b5-0144-17c5-ca7d-e679358162dc-35816297"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f3f-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Influencer Picks"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Discover trending styles."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_4e9368b5-0144-17c5-ca7d-e679358162e2-35816297"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.NotSupported _atom="DOM" />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_4e9368b5-0144-17c5-ca7d-e679358162e7-35816297"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f4a-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Sell Fast"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"List items on top platforms."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_4e9368b5-0144-17c5-ca7d-e679358162ed-35816297"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.NotSupported _atom="DOM" />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_4e9368b5-0144-17c5-ca7d-e679358162f2-35816297"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f55-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Local Storage"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Safe and secure storage options."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                            <_Builtin.Block
                              id={_utils.cx(
                                _styles,
                                "w-node-_4e9368b5-0144-17c5-ca7d-e679358162f8-35816297"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"Community"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(
                                  _styles,
                                  "nav-mega-menu-list"
                                )}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_4e9368b5-0144-17c5-ca7d-e679358162fc-35816297"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.NotSupported _atom="DOM" />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_4e9368b5-0144-17c5-ca7d-e67935816301-35816297"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f64-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Friend Groups"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Connect with your fashion circle."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_4e9368b5-0144-17c5-ca7d-e67935816307-35816297"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.NotSupported _atom="DOM" />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_4e9368b5-0144-17c5-ca7d-e6793581630c-35816297"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f6f-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Delivery"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Hassle-free delivery service."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_4e9368b5-0144-17c5-ca7d-e67935816312-35816297"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.NotSupported _atom="DOM" />
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_4e9368b5-0144-17c5-ca7d-e67935816317-35816297"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f7a-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"App Features"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Capture and catalog your closet."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.ListItem>
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "flex-horizontal",
                            "w-node-_4e9368b5-0144-17c5-ca7d-e6793581631d-35816297"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f80-d66a6ef8"
                          )}
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "card-link",
                              "inverse-card-link",
                              "flex-child-expand"
                            )}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "card-body")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "h3-heading")}
                                tag="div"
                              >
                                {"Join the fashion revolution"}
                              </_Builtin.Block>
                              <_Builtin.Paragraph
                                className={_utils.cx(
                                  _styles,
                                  "paragraph-sm",
                                  "utility-text-inverse-secondary"
                                )}
                              >
                                {
                                  "Be part of a stylish community and transform your closet experience."
                                }
                              </_Builtin.Paragraph>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "utility-margin-top-auto"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "button-group")}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-button",
                                      "secondary-text-button"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.Block tag="div">
                                      {"Join now"}
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "button-icon"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.NotSupported _atom="DOM" />
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                      </_Builtin.List>
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav-menu-list-item")}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav-link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Our Story"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav-menu-list-item")}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav-link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Style Blog"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav-menu-list-item")}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav-menu-dropdown")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(_styles, "nav-link")}
                    tag="div"
                  >
                    <_Builtin.Block tag="div">{"Help"}</_Builtin.Block>
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "nav-caret")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "nav-menu-dropdown-list")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "nav-menu-dropdown-list-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.List
                        className={_utils.cx(
                          _styles,
                          "flex-vertical",
                          "utility-margin-bottom-0"
                        )}
                        tag="ul"
                        role="list"
                        unstyled={true}
                      >
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "utility-margin-bottom-0"
                          )}
                        >
                          <_Builtin.Link
                            className={_utils.cx(_styles, "nav-dropdown-link")}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-label")}
                              tag="div"
                            >
                              {"FAQs"}
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "utility-margin-bottom-0"
                          )}
                        >
                          <_Builtin.Link
                            className={_utils.cx(_styles, "nav-dropdown-link")}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-label")}
                              tag="div"
                            >
                              {"Contact"}
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                      </_Builtin.List>
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
            </_Builtin.List>
          </_Builtin.NavbarMenu>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-right")}
          id={_utils.cx(
            _styles,
            "w-node-_4e9368b5-0144-17c5-ca7d-e67935816345-35816297"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "button-group",
              "utility-margin-top-0"
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "button")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "button-label")}
                tag="div"
              >
                {"Sign up"}
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "nav-mobile-menu-button")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "icon")} tag="div">
            <_Builtin.NotSupported _atom="DOM" />
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
