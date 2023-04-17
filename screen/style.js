import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: '#6fb23e',
    overflow: "hidden",
    width :"100%",
    flex: 1,
  },
  container_1: {
    backgroundColor: '#E5E4E2',
    flex: 1,
  },
  container_2: {
    flexDirection:'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-between',
    padding:40,
    width: "100%",
  },
  heading: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    
  },
  header_1:{
    width:'100%',
    backgroundColor: '#6fb23e',
    padding:20,
    height: 130,
    
  },
  heading2: {
    color: '#ffff',
    textAlign: 'center',
    top : 20,
    marginTop: 20,
  },
  top: {
    top : 20,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
  },
  title: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    top: 30,
  },
  card: {
    backgroundColor: 'white',
    borderRadius:15,
    margin: "auto",
    padding:10,
    width: '90%',
    top: 20,
  },
  item: {
    backgroundColor: '#ffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  head_sec: {
    fontWeight : "bold",
    fontSize: 16,
    margin: 3,
  },
  info:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  plane: {
    marginTop: 10,
    marginLeft: -15,
    marginBottom: -15,
  },
  plane_type:{
    marginLeft:-25,
    fontSize:20,
    fontWeight: "bold",
  },
  date_info:{
    color:'blue',
  },
  input_place: {
    width: '100%',
    borderRadius:5,
    borderWidth:1,
    marginBottom:10,
    marginTop:10,
    paddingLeft:10,
    alignItems: 'center',
    borderColor: '#E5E5E5',
    flexDirection:'row',
    
  },
  search: {
    alignSelf: "center",
    backgroundColor: "#e67e1f",
    color : '#ffff',
    fontweight : "Bold",
    textAlign: "center",
    width: '100%',
    margin : 10,
    borderRadius: 5,
    fontSize: 20,
    height: 30,
  },
  input: {
    height: 45,
    padding: 10,
    width: '100%',
  },
  footer: {
    backgroundColor: '#EEE',
    borderRadius:25,
    flex:1,
    marginTop : 0,
    width: "100%",
  },
  copyright: {
    color : '#797979',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 10,
    textAlign: 'center',
  },
  copyright_1: {
    color : '#797979',
    fontWeight: 'bold',
    marginBottom: 10,
    padding:10,
    marginTop: 5,
    textAlign: 'center',
  },
});