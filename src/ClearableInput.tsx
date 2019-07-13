import React, { useState, createRef } from "react";
import styled from "styled-components";

const ClearButton = styled.button`
  background: transparent;
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid purple;
  display: ${(props: { shouldDisplay: boolean }) =>
    props.shouldDisplay ? "auto" : "none"};
`;

const Container = styled.div`
  display: flex;
  padding: 0.5rem;
  margin: 0.5rem;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid purple;
  width: 100%;
`;
const ClearableInput = ({
  text,
  onChange
}: {
  text: string;
  onChange: (value: string) => void;
}) => {
  const textBoxRef = createRef<HTMLInputElement>();
  const [focused, setFocused] = useState(false);
  const updateFocus = (focus: boolean) => {
    setFocused(focus);
  };
  const driveFocus = () => {
    const node = textBoxRef.current;
    if (node) {
      node.focus();
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    var currentTarget = e.currentTarget;

    setTimeout(function() {
      if (!currentTarget.contains(document.activeElement)) {
        updateFocus(false);
      }
    }, 0);
  };

  return (
    <Container
      tabIndex={1}
      onBlur={onBlur}
      onFocus={() => {
        updateFocus(true);
      }}
    >
      <Input
        type="text"
        ref={textBoxRef}
        value={text}
        onChange={e => onChange(e.target.value)}
      />
      <ClearButton
        onClick={() => {
          onChange("");
          driveFocus();
        }}
        shouldDisplay={!!text && focused}
      >
        Clear
      </ClearButton>
    </Container>
  );
};
export { ClearableInput };
