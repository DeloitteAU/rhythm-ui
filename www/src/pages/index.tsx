

import React from "react"

import Layout from "../templates/Default";
import RuiGrid from '@rhythm-ui/grid-react';

//import Image from "../components/image"

const IndexPage: React.FC = () => (
  <Layout>
    <RuiGrid>
      <div className="s-10">
        <h1>Rhythm UI Design System</h1>
        <p>
          The <strong>Rhythm UI Design System</strong> is Deloitte’s open-source white label design system for user interfaces and experiences.
          With Deloitte's foundations, the system consists of code, design tools and resources, human interface guidelines, and a vibrant
          community of contributors.
        </p>
      </div>
    </RuiGrid>
  </Layout>
)

export default IndexPage
