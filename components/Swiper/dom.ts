export const getTouchEventData = (e: any) => {
	return "changedTouches" in e ? e.changedTouches[0] : e;
}