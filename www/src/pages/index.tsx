

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"

import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
import "@rhythm-ui/button";

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
   
    <rui-button>This is a button</rui-button> 
  </Layout>
)

export default IndexPage
