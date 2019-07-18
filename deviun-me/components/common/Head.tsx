import React, { ReactNode } from 'react';
import Head from 'next/head';

interface HeadCustomPropsT {
  title?: string;
  children?: ReactNode;
}

const DEFAULT_TITLE = 'Anton Danilov';

export default function HeadCustom({
  title = DEFAULT_TITLE,
  children,
}: HeadCustomPropsT) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-touch-icon.png?2" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png?2" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png?2" />
      <link rel="manifest" href="/static/images/site.webmanifest?2" />
      {children}
    </Head>
  );
}
