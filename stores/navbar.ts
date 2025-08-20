// stores/navbar.ts
import { defineStore } from 'pinia'

export const useNavbarStore = defineStore('navbar', {
  state: () => ({
    isLeftNavbarVisible: false,
    activeItem: 'top' as string,
    expandedGroups: ['management'] as string[]
  }),
  
  actions: {
    toggleLeftNavbar() {
      this.isLeftNavbarVisible = !this.isLeftNavbarVisible
    },
    
    showLeftNavbar() {
      this.isLeftNavbarVisible = true
    },
    
    hideLeftNavbar() {
      this.isLeftNavbarVisible = false
    },
    
    setActiveItem(item: string) {
      this.activeItem = item
    },
    
    toggleGroup(groupName: string) {
      const index = this.expandedGroups.indexOf(groupName)
      if (index > -1) {
        this.expandedGroups.splice(index, 1)
      } else {
        this.expandedGroups.push(groupName)
      }
    }
  },
  
  getters: {
    getActiveItem: (state) => state.activeItem,
    getExpandedGroups: (state) => state.expandedGroups,
    getLeftNavbarVisibility: (state) => state.isLeftNavbarVisible
  }
})