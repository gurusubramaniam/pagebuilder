/**
 * Name : HeadingComponent.js
 * @param {*} props
 * Description:
 *      Component for rendering h tags which takes props to decide what h tag should be rendered, default value is set to h1.
 * props
 * {
 *      size : 4 (this will render h4 tag)
 *      heading : "pageHeader" (this value pageHeader is the key which should be present in above content section)
 *  }
 * }
 */

const HeadingComponent = ({ size = 1, heading = 'DefaultHeading' }) => {
  const HeadTag = `h${size}`;
  return (
    <div>
      <HeadTag>{heading}</HeadTag>
    </div>
  );
};
export default HeadingComponent;
