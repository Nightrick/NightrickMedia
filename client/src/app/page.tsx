'use client';

import React from 'react';
import {
  AppLayout,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Header,
  HelpPanel,
  Link,
  SideNavigation,
} from '@cloudscape-design/components';

export default function Home() {

  let [helpPanelOpen, setHelpPanelOpen] = React.useState(false);
  let [navPanelOpen, setNavPanelOpen] = React.useState(false);

  return (
    <AppLayout
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: 'Home', href: '#' },
            { text: 'Nightrick Media', href: '#' },
          ]}
        />
      }
      navigationOpen={navPanelOpen}
      navigation={
        <SideNavigation
          header={{
            href: '#',
            text: 'Nightrick Media',
          }}
          items={[
            { type: 'link', text: `Publishing`, href: `#` },
            { type: 'link', text: `YouTube`, href: `#` },
            { type: 'link', text: `TikTok`, href: `#` },
          ]}
        />
      }
      onNavigationChange={() => {setNavPanelOpen(!navPanelOpen)}}
      toolsOpen={helpPanelOpen}
      tools={<HelpPanel header={<h2>We're here to help</h2>}>Nightrick Media is there for you.</HelpPanel>}
      onToolsChange={()=> {setHelpPanelOpen(!helpPanelOpen)}}
      content={
        <ContentLayout
          header={
            <Header variant="h1">
              Nightrick Media
            </Header>
          }
        >
          <Container
            header={
              <Header variant="h2">
                Please select from one of our many offerings:
              </Header>
            }
          >
            Induction
          </Container>
        </ContentLayout>
      }
    />
  );
}
