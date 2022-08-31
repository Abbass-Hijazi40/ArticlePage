import React from 'react'
import Header from "../components/Header/Header";
import DrawerAppBar from '../components/AppBar/DrawerAppBar';
import { FooterContainer } from "../containers/footer";
import Article1 from "../components/Article/Article1"
import "../styles/ArticlePage.css"



export default function ArticlePage() {
  return (
    <>
    <DrawerAppBar/>
      <Header/>
      <Article1/>
      <FooterContainer/>
      </>
  )
}
