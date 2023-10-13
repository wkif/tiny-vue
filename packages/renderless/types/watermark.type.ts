export type IWaterMarkRef<T> = { value: T }
export interface MarkFont {
  fontSize: number
  fontFamily: string
  fontWeight: 'normal' | 'light ' | 'weight' | number
  color: CanvasFillStrokeStyles['fillStyle']
  textAlign: CanvasTextAlign
}
