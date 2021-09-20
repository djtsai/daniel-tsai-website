import MyComponent from '../../../../slices/BannerSlice';

export default {
  title: 'slices/BannerSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Deliver impactful infrastructures","spans":[]}],"description":[{"type":"paragraph","text":"Proident exercitation ex et.","spans":[]}],"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _HalfBanner = () => <MyComponent slice={{"variation":"halfBanner","name":"Half Banner","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Redefine holistic networks","spans":[]}],"description":[{"type":"paragraph","text":"Ullamco mollit veniam exercitation minim irure in in sint exercitation eu dolore. Lorem Lorem laboris sit ex esse laborum minim dolor laboris.","spans":[]}],"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"}},"id":"_HalfBanner"}} />
_HalfBanner.storyName = 'Half Banner'
