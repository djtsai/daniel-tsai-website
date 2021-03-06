import MyComponent from '../../../../slices/BannerSlice';

export default {
  title: 'slices/BannerSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Repurpose clicks-and-mortar methodologies","spans":[]}],"description":[{"type":"paragraph","text":"Magna sunt est amet sint mollit aliqua.","spans":[]}],"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _HalfBanner = () => <MyComponent slice={{"variation":"halfBanner","name":"Half Banner","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Expedite clicks-and-mortar bandwidth","spans":[]}],"description":[{"type":"paragraph","text":"Culpa qui commodo labore eu. Eu et sit qui irure occaecat ullamco incididunt. Culpa dolor nostrud deserunt laboris id laborum dolore dolor.","spans":[]}],"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"}},"id":"_HalfBanner"}} />
_HalfBanner.storyName = 'Half Banner'
