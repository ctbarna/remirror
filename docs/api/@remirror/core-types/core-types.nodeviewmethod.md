<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/core-types](./core-types.md) &gt; [NodeViewMethod](./core-types.nodeviewmethod.md)

## NodeViewMethod type

The method signature used to call the Prosemirror `nodeViews`

<b>Signature:</b>

```typescript
export declare type NodeViewMethod<GNodeView extends NodeView = NodeView> = (node: ProsemirrorNode, view: EditorView, getPos: (() => number) | boolean, decorations: Decoration[]) => GNodeView;
```