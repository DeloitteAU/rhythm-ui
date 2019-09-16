---
package: "@rhythm-ui/-navigation"
title: "rui-navigation"
---

Readme file for rui-navigation

# Navigation group

 A `rui-navigation-group` component consists of the name for the navigation group and its contents. The contents of a rui-navigation-group are hidden by default until activation of the name of the navigation of group occurs. Hovering, pressing the 'enter' key and tapping on the name of the navigation group causes its activation. 

## Default rui-navigation and rui-navigation-group components

```html preview
<style>
    .link-listing > ul {
        padding-left: 0;
        background: #f0f2f4;
        margin: 0;
        list-style: none;
    }

    .link-listing a {
        display: block;
        padding: 1em;
        border-bottom: white solid 1px;
        color: inherit;
        font-weight: bold;
        font-size: 14px;
        text-decoration: none;
        cursor: pointer;
    }

    .link-listing li:(:last-of-type) a {
        border-bottom: none;
    }

    .link-listing a:hover,
    .link-listing a:focus {
        outline: none;
        color: #208834;
    }

    @media (min-width: 769px) {
        .link-listing > ul {
            background: none;
        }

        .link-listing a {
            border-bottom: #c8cacc solid 1px;
        }

        .link-listing li:(:first-of-type) a {
            border-top: #c8cacc solid 1px;
        }
    }
</style>

<rui-navigation>
    <rui-navigation-group>
        <span slot="name">About Us</span>
        Content 1
    </rui-navigation-group>
    <rui-navigation-group>
        <span slot="name">Products</span>
        Content 2
    </rui-navigation-group>
    <rui-navigation-group>
        <span slot="name">Services</span>
        Content 3
    </rui-navigation-group>
    <rui-navigation-group>
        <span slot="name">Blog</span>
        Content 4
    </rui-navigation-group>
    <rui-navigation-group>
        <span slot="name">Contact</span>
        Content 4
    </rui-navigation-group>
</rui-navigation>
```

The `rui-navigation-group` may be further styled to cater for specific requierements as demonstrated below:

```html preview
<style>
    rui-button {
        --rui-button__background-color: #208834;
    }
</style>

<rui-navigation class="sample-1">
    <rui-navigation-group href="https://www.google.com">
        <span slot="name">About us</span>
        <div slot="first-column">
            <h2>About us</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <rui-button>
                Find out more
            </rui-button>
        </div>
        <div role="navigation" aria-label="Contact navigation" class="link-listing">
            <ul>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
            </ul>
        </div>
    </rui-navigation-group>
   <rui-navigation-group href="https://www.wunderground.com">
        <span slot="name">Products</span>
        <div slot="first-column">
            <h2>Products</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <rui-button>
                Find out more
            </rui-button>
        </div>
        <div role="navigation" aria-label="Contact navigation" class="link-listing">
            <ul>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
            </ul>
        </div>
    </rui-navigation-group>
    <rui-navigation-group href="https://www.bing.com">
        <span slot="name">Services</span>
        <div slot="first-column">
            <h2>Services</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <rui-button>
                Find out more
            </rui-button>
        </div>
        <div role="navigation" aria-label="Contact navigation" class="link-listing">
            <ul>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
            </ul>
        </div>
    </rui-navigation-group>
    <rui-navigation-group href="https://www.bing.com">
        <span slot="name">Blog</span>
         <div slot="first-column">
            <h2>Blog</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <rui-button>
                Find out more
            </rui-button>
        </div>
        <div role="navigation" aria-label="Contact navigation" class="link-listing">
            <ul>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
            </ul>
        </div>
    </rui-navigation-group>
    <rui-navigation-group>
        <span slot="name">Contact</span>
         <div slot="first-column">
            <h2>Contact</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <rui-button>
                Find out more
            </rui-button>
        </div>
        <div role="navigation" aria-label="Contact navigation" class="link-listing">
            <ul>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
                <li>
                    <a href="/">Child link</a>
                </li>
            </ul>
        </div>
    </rui-navigation-group>
</rui-navigation>
```