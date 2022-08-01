import CustomClasses from './components/CustomClasses/CustomClasses'
import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/Checkbox/Checkbox'
import Header from './components/Header/Header'
import Image from './components/Image/Image'
import MyText from './components/micro/MyText/MyText'
import MyTitle from './components/micro/MyTitle/MyTitle'
import MyButton from './components/micro/MyButton/MyButton'
import MyImage from './components/micro/MyImage/MyImage'
import MyHeader from './components/containers/MyHeader/MyHeader'
import MyMain from './components/containers/MyMain/MyMain'
import MyFooter from './components/containers/MyFooter/MyFooter'
import MultifieldExampleComponent from './components/MultifieldExampleComponent/MultifieldExampleComponent'
import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

MapTo('vue/components/customclasses')(CustomClasses, EditConfig)

// Teste Component Mapping
MapTo('vue/components/multifield-example-component')(
  MultifieldExampleComponent,
  EditConfig
)

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

// Header Component Mapping
MapTo('vue/components/header')(Header, EditConfig)

// Image Component Mapping
MapTo('vue/components/image')(Image, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/image'
})

// Text Component Mapping
MapTo('vue/components/text')(Text, {
  emptyLabel: 'Text',

  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1
  }
})

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)

// MyText Component Mapping
MapTo('vue/components/my-text')(MyText)

// MyTitle Component Mapping
MapTo('vue/components/my-title')(MyTitle)

// MyButton Component Mapping
MapTo('vue/components/my-button')(MyButton)

// MyFooter Component Mapping
MapTo('vue/components/my-footer')(MyFooter)

// MyHeader Component Mapping
MapTo('vue/components/my-header')(MyHeader)

// MyMain Component Mapping
MapTo('vue/components/my-main')(MyMain)

// MyImage Component Mapping
MapTo('vue/components/my-image')(MyImage)
