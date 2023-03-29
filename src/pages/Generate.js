import React from "react";
import PageContainer from "../components/Containers/PageContainer";
import Heading from "../components/Headings/Heading";
import GeneratorInput from "../components/GeneratorInput";
export default function Generate() {
  return (
    <>
      <PageContainer>
        <Heading title="Generate QR-Code" />
        <GeneratorInput value={qrValue} setValue={setQrValue} />
      </PageContainer>
    </>
  );
}
