export interface Entity<TId, TSnapshot> {
  id(): TId;
  snapshot(): TSnapshot;
}
