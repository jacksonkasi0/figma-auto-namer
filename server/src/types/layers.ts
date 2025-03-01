// Define the type for LayerData explicitly
export type LayerData = {
    id: string;
    n: string; // Name
    t: string; // Type (FRAME, TEXT, VECTOR, etc.)
    hi: string; // Hierarchy path
    w: number; // Width
    h: number; // Height
    tx?: string; // Text content (only for TEXT nodes)
    fs?: number; // Font size (only for TEXT nodes)
    children?: LayerData[]; // Array of child layers
};

// Define TypeScript interface for the main schema
export interface FigmaNodeLayers {
    context: string; // Descriptive context about the Figma design
    layers: LayerData[]; // Array of LayerData
}