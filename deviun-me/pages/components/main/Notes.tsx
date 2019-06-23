import React from 'react';
import styled from 'styled-components';

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
`;

const NoteItem = styled.div`
  display: inline-block;
  margin: 10px 20px;
  max-width: 300px;
  vertical-align: top;
  overflow: hidden;
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
`;

export default function Notes({
  items,
}: NotesPropsT) {
  const reversedNotes = [...items].reverse();
  return (
    <NotesStyled>
      {
        reversedNotes.map((item) => (
          <a href={item.link} target="_blank">
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
