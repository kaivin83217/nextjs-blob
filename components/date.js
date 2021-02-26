
// import moment from 'moment'
export default function Date({ dateString }) {
  // const date = moment(dateString, ['YYYY-MM-DD','DD-MM-YYYY']).format("YYYY年MM月DD日");
  return <time dateTime={dateString}>{dateString}</time>
}