import React from 'react';
import styled from 'styled-components';

import YMEvent from '../common/YMEvent';

export interface NoteItemT {
  cover: string;
  title: string;
  link: string;
}

interface NotesPropsT {
  items: NoteItemT[];
}

const NotesStyled = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding: 20px 0px;
  text-align: center;
`;

const NoteItem = styled.div`
  display: inline-block;
  margin: 15px 20px;
  max-width: 300px;
  vertical-align: top;
  overflow: hidden;
  text-align: left;
  transition: 0.15s;

  &:hover {
    transform: scale(1.08, 1.08);
    opacity: 0.9;
  }
`;

const NoteCover = styled.div`
  width: 250px;
  height: 110px;
  background-color: gray;
  background-size: cover;
  background-position: center;
  background-image: url(${({ cover }: { cover: string }) => cover});
  border-radius: 7px;
`;

const NoteTitle = styled.div`
  color: black;
  margin-top: 20px;
  font-weight: 600;
  font-size: 15px;
  max-width: 250px;
`;

export default function Notes({
  items,
}: NotesPropsT) {
  const reversedNotes = [...items].reverse();
  return (
    <NotesStyled>
      {
        reversedNotes.map((item) => (
          <a href={item.link} onClick={() => YMEvent('openRecentNote')} target="_blank">
            <NoteItem>
              <NoteCover cover={item.cover} />
              <NoteTitle>{item.title}</NoteTitle>
            </NoteItem>
          </a>
        ))
      }
    </NotesStyled>
  );
}
