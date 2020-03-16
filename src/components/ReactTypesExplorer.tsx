import React, { useState, useEffect } from "react";
import styled from "styled-components";

const IS_DEV = false;

const options = [
  "Select a Type",
  "HTMLElement",
  "HTMLAnchorElement",
  "HTMLAreaElement",
  "HTMLAudioElement",
  "HTMLBaseElement",
  "HTMLBodyElement",
  "HTMLBRElement",
  "HTMLButtonElement",
  "HTMLCanvasElement",
  "HTMLDataElement",
  "HTMLDataListElement",
  "HTMLDialogElement",
  "HTMLDivElement",
  "HTMLDListElement",
  "HTMLEmbedElement",
  "HTMLFieldSetElement",
  "HTMLFormElement",
  "HTMLHeadingElement",
  "HTMLHeadElement",
  "HTMLHRElement",
  "HTMLHtmlElement",
  "HTMLIFrameElement",
  "HTMLImageElement",
  "HTMLInputElement",
  "HTMLModElement",
  "HTMLLabelElement",
  "HTMLLegendElement",
  "HTMLLIElement",
  "HTMLLinkElement",
  "HTMLMapElement",
  "HTMLMetaElement",
  "HTMLObjectElement",
  "HTMLOListElement",
  "HTMLOptGroupElement",
  "HTMLOptionElement",
  "HTMLParagraphElement",
  "HTMLParamElement",
  "HTMLPreElement",
  "HTMLProgressElement",
  "HTMLQuoteElement",
  "HTMLScriptElement",
  "HTMLSelectElement",
  "HTMLSourceElement",
  "HTMLSpanElement",
  "HTMLStyleElement",
  "HTMLTableElement",
  "HTMLTableColElement",
  "HTMLTableDataCellElement",
  "HTMLTableHeaderCellElement",
  "HTMLTableRowElement",
  "HTMLTableSectionElement",
  "HTMLTemplateElement",
  "HTMLTextAreaElement",
  "HTMLTitleElement",
  "HTMLTrackElement",
  "HTMLUListElement",
  "HTMLVideoElement",
  "HTMLWebViewElement",
  "SVGElement",
  "SVGSVGElement",
  "SVGCircleElement",
  "SVGClipPathElement",
  "SVGDefsElement",
  "SVGDescElement",
  "SVGEllipseElement",
  "SVGFEBlendElement",
  "SVGFEColorMatrixElement",
  "SVGFEComponentTransferElement",
  "SVGFECompositeElement",
  "SVGFEConvolveMatrixElement",
  "SVGFEDiffuseLightingElement",
  "SVGFEDisplacementMapElement",
  "SVGFEDistantLightElement",
  "SVGFEDropShadowElement",
  "SVGFEFloodElement",
  "SVGFEFuncAElement",
  "SVGFEFuncBElement",
  "SVGFEFuncGElement",
  "SVGFEFuncRElement",
  "SVGFEGaussianBlurElement",
  "SVGFEImageElement",
  "SVGFEMergeElement",
  "SVGFEMergeNodeElement",
  "SVGFEMorphologyElement",
  "SVGFEOffsetElement",
  "SVGFEPointLightElement",
  "SVGFESpecularLightingElement",
  "SVGFESpotLightElement",
  "SVGFETileElement",
  "SVGFETurbulenceElement",
  "SVGFilterElement",
  "SVGForeignObjectElement",
  "SVGGElement",
  "SVGImageElement",
  "SVGLineElement",
  "SVGLinearGradientElement",
  "SVGMarkerElement",
  "SVGMaskElement",
  "SVGMetadataElement",
  "SVGPathElement",
  "SVGPatternElement",
  "SVGPolygonElement",
  "SVGPolylineElement",
  "SVGRadialGradientElement",
  "SVGRectElement",
  "SVGStopElement",
  "SVGSwitchElement",
  "SVGSymbolElement",
  "SVGTextElement",
  "SVGTextPathElement",
  "SVGTSpanElement",
  "SVGUseElement",
  "SVGViewElement"
];

const Input = styled.input`
  display: block;
  border-radius: 6px;
  appearance: none;
  background: transparent;
  padding: 5px 10px;
  font-size: 18px;
  border: 1px solid lightgray;
  width: 50%;
`;

const Select = styled.select`
  display: block;
  border-radius: 6px;
  appearance: none;
  background: transparent;
  padding: 5px 10px;
  font-size: 18px;
  border: 1px solid lightgray;
  width: 50%;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Name = styled.h3`
  border: none;
  color: #f5f5f5;
  background: dodgerblue;
  border-radius: 3px;
  font-size: 14px;
  padding: 2px 5px;
  margin: 0px 5px;
`;

type Prop = {
  name: string;
  description: null | string;
  required: boolean;
  defaultValue: any;
  parent: {
    fileName: string;
    name: keyof typeof options;
  };
  type: {
    name: string;
  };
};

export const ReactTypesExplorer = () => {
  const [choice, setChoice] = useState("");
  const [result, setResult] = useState<Prop[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (choice) {
      if (choice === "Select a Type") {
        setResult([]);
        return;
      }
      const apiPath = `/.netlify/functions/getReactDTS?type=${choice}`;
      const basePath = IS_DEV ? "http://localhost:34567" : "";
      setLoading(true);
      setResult([]);
      fetch(`${basePath}${apiPath}`)
        .then(response => response.json())
        .then(json => setResult(json))
        .catch(error => {
          console.log("ERROR::: ", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [choice]);

  const filteredResults = result.filter(value =>
    value.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Flex>
        <Select value={choice} onChange={e => setChoice(e.target.value)}>
          {options.map(opt => {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          })}
        </Select>

        <Input
          value={filter}
          onChange={e => setFilter(e.target.value)}
          placeholder="Filter"
        />
      </Flex>

      {loading && <h3>Loading...</h3>}
      {!!filteredResults.length && (
        <h3>
          {filteredResults.length} available prop
          {filteredResults.length === 1 ? "" : "s"}
        </h3>
      )}

      {filteredResults.map(res => {
        return (
          <div key={res.name}>
            <h3 style={{ margin: "20px 0px" }}> {res.name}</h3>
            <p>{res.description ? res.description.substring(0, 100) : ""}</p>
            <p>
              Required: <b>{res.required ? "true" : "false"}</b>
            </p>
            <p>
              Parent Name: <b>{res.parent.name}</b>
            </p>
            <p>
              Parent fileName:{" "}
              <b>
                {res.parent.fileName.replace(
                  "www.tsx.guide/functions/node_modules/",
                  ""
                )}
              </b>
            </p>
            <pre>{res.type.name}</pre>
            <hr />
          </div>
        );
      })}
    </>
  );
};
