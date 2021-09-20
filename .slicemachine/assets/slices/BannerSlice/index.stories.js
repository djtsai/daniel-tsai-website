import MyComponent from '../../../../slices/BannerSlice';

export default {
  title: 'slices/BannerSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Envisioneer open-source users","spans":[]}],"description":[{"type":"paragraph","text":"In excepteur velit qui. Deserunt enim enim duis eiusmod laborum tempor.","spans":[]}],"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _HalfBanner = () => <MyComponent slice={{"variation":"halfBanner","name":"Half Banner","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Unleash e-business partnerships","spans":[]}],"description":[{"type":"paragraph","text":"Lorem id incididunt eiusmod eiusmod tempor reprehenderit minim consectetur dolor minim.","spans":[]}],"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"}},"id":"_HalfBanner"}} />
_HalfBanner.storyName = 'Half Banner'
