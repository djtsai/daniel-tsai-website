import MyComponent from '../../../../slices/BannerSlice';

export default {
  title: 'slices/BannerSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Generate ubiquitous networks","spans":[]}],"description":[{"type":"paragraph","text":"Laborum fugiat exercitation voluptate aliquip.","spans":[]}],"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _HalfBanner = () => <MyComponent slice={{"variation":"halfBanner","name":"Half Banner","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Syndicate ubiquitous e-commerce","spans":[]}],"description":[{"type":"paragraph","text":"Sint sunt aute ut cupidatat quis reprehenderit id excepteur proident. Sit in dolor occaecat ex ut elit magna.","spans":[]}],"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"}},"id":"_HalfBanner"}} />
_HalfBanner.storyName = 'Half Banner'
